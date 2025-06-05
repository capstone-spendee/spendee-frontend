import logo from '@/../public/image/new-logo.png';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';

interface PropsResponse {
  responseMessage: string | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AlertDialogPersonality(props: PropsResponse) {
  const parsedResponse = props.responseMessage ? props.responseMessage : null;

  const extractStatus = (text: string | null) => {
        if (!text) return null;
        
        // Regex untuk mencari "Ditolak" atau "Disetujui"
        const statusMatch = text.match(/(Ditolak|Disetujui)/i);
        return statusMatch ? statusMatch[1] : null;
    };
    const saveHistory = async () => {
            
            const extractedStatus = extractStatus(parsedResponse);
            console.log(extractedStatus); 

            const historyData = {
                userId:{$oid:localStorage.getItem('userId')},
                email: localStorage.getItem('userEmail'),
                status: extractedStatus, 
                kategori: 'personal',
            };

            try {
                const res = await fetch('http://13.54.145.211:3000/api/prediction/simpan', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    body: JSON.stringify(historyData),
                });

                console.log(historyData);
                const data = await res.text();
                console.log(`Response: ${data}`);
            } catch (err) {
                toast.error('Something went wrong');
                console.log(err);
            }
    };

  return (
    <AlertDialog
      open={props.open}
      onOpenChange={props.onOpenChange}
    >
      <AlertDialogContent className='border-3 md:border-5 rounded-3xl'>
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
                  <p>{parsedResponse}</p>
                </>
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Check Again</AlertDialogCancel>
          <Link href="/dashboard/history">
            <AlertDialogAction className="w-full" onClick={saveHistory}>Save to History</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
