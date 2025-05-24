import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Link from 'next/link';

interface PropsResponse {
  responseMessage: string | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AlertDialogResponse(props: PropsResponse) {
  const parsedResponse = props.responseMessage ? JSON.parse(props.responseMessage) : null;

  return (
    <AlertDialog
      open={props.open}
      onOpenChange={props.onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your Eligibility</AlertDialogTitle>
          <AlertDialogDescription  asChild>
            {parsedResponse && (
              <div className="space-y-3">
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
                  <p>{parsedResponse.negative_reasons}</p>
                </>

              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Check Again</AlertDialogCancel>
          <Link href="/dashboard/history">
            <AlertDialogAction>Save to History</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
