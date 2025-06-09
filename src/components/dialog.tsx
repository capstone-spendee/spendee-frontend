import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import logo from '../../public/image/new-logo.png';
import { toast } from 'sonner';
import Link from 'next/link';

interface PropsResponse {
  responseMessage: string | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AlertDialogResponse(props: PropsResponse) {
  const parsedResponse = props.responseMessage ? JSON.parse(props.responseMessage) : null;

  const saveHistory = async () => {
    if (parsedResponse?.result) {

      const historyData = {
        userId: {$oid:localStorage.getItem('userId')},
        email: localStorage.getItem('userEmail'),
        status: parsedResponse.result,
        kategori: 'startup',
      };

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/prediction/simpan`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(historyData),
        });
        const data = await res.text();
        // console.log(`Response: ${data}`);
        return data;
      } catch (err) {
        toast.error('Something went wrong');
        console.log(err);
      }
    }
  };

  return (
    <AlertDialog
      open={props.open}
      onOpenChange={props.onOpenChange}
    >
      <AlertDialogContent className="border-3 md:border-5 rounded-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-between">
            Your Eligibility
            <Image
              src={logo}
              alt="logo"
              width={70}
            />
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            {parsedResponse && (
              <div className="space-y-3 text-start">
                <>
                  <strong>Result:</strong>
                  <p>{parsedResponse.result}</p>
                </>

                <>
                  <strong>Positive Reasons:</strong>
                  <ul className="list-disc pl-5">
                    {parsedResponse.positive_reasons.map((reason: string, index: number) => (
                      <li key={index}>{reason}</li>
                    ))}
                  </ul>
                </>
                <>
                  <strong>Negative Reasons:</strong>
                  <ul className="list-disc pl-5">
                    {parsedResponse.negative_reasons.map((reason: string, index: number) => (
                      <li key={index}>{reason}</li>
                    ))}
                  </ul>
                </>
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Check Again</AlertDialogCancel>
          <Link href="/dashboard/history">
          <AlertDialogAction
            className="w-full"
            onClick={saveHistory}
          >
            Save to History
          </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
