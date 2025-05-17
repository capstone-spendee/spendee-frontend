import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    id: 1,
    invoice: "Personal",
    paymentStatus: "amat",
    totalAmount: "12/12/2025",
    paymentMethod: "Sukses",
    email: "dev@spendee.com",
  },
  {
    id: 2,
    invoice: "Startup", 
    paymentStatus: "spendee",
    totalAmount: "12/12/2025",
    paymentMethod: "Failed",
    email: "amat@spendee.com",
  },
  {
    id: 3,
    invoice: "Personal",
    paymentStatus: "amat",
    totalAmount: "12/12/2025",
    paymentMethod: "Sukses",
    email: "dev@spendee.com",
  },
  {
    id: 4,
    invoice: "Startup", 
    paymentStatus: "spendee",
    totalAmount: "12/12/2025",
    paymentMethod: "Failed",
    email: "amat@spendee.com",
  },
  {
    id: 5,
    invoice: "Personal",
    paymentStatus: "amat",
    totalAmount: "12/12/2025",
    paymentMethod: "Sukses",
    email: "dev@spendee.com",
  },
  {
    id: 6,
    invoice: "Startup", 
    paymentStatus: "spendee",
    totalAmount: "12/12/2025",
    paymentMethod: "Failed",
    email: "amat@spendee.com",
  },
]

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Kategori</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Persentase</TableCell>
          <TableCell className="text-right">78%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
