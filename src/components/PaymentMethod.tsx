import { Button } from "./ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function PaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup
          defaultValue="card"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div>
            <RadioGroupItem value="card" id="card" className="peer sr-only" />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 min-h-[105px]  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Image
                src="/credit_card.svg"
                alt="Credit Card"
                className="mb-3 object-fit"
                width={250}
                height={250}
              />
              <p className="text-sm md:text-base">Credit Card</p>
            </Label>
          </div>
          <div>
            <RadioGroupItem value="bca" id="bca" className="peer sr-only" />
            <Label
              htmlFor="bca"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent min-h-[105px] hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Image
                src="/bca_va.svg"
                height={100}
                width={100}
                alt="BCA VA"
                className="mb-3"
              />
              <p className="text-sm md:text-base">BCA VA</p>
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="mandiri"
              id="mandiri"
              className="peer sr-only"
            />
            <Label
              htmlFor="mandiri"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent min-h-[105px] hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Image
                src="/mandiri.svg"
                height={100}
                width={100}
                alt="Mandiri VA"
                className="mb-3"
              />
              Mandiri VA
            </Label>
          </div>
          <div>
            <RadioGroupItem value="bri" id="bri" className="peer sr-only" />
            <Label
              htmlFor="bri"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent 
              min-h-[105px] hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Image
                src="/bri.svg"
                height={100}
                width={100}
                alt="BRIVA"
                className="mb-3"
              />
              BRIVA
            </Label>
          </div>
          <div>
            <RadioGroupItem value="qris" id="qris" className="peer sr-only" />
            <Label
              htmlFor="qris"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent min-h-[105px] hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Image
                src="/qris.svg"
                height={100}
                width={100}
                alt="QRIS"
                className="mb-3"
              />{" "}
              QRIS
            </Label>
          </div>
          <div>
            <RadioGroupItem value="gopay" id="gopay" className="peer sr-only" />
            <Label
              htmlFor="gopay"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent  min-h-[105px] hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Image
                src="/gopay.svg"
                height={100}
                width={100}
                alt="Gopay"
                className="mb-3"
              />{" "}
              Gopay
            </Label>
          </div>
        </RadioGroup>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="First Last" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number">Card number</Label>
          <Input id="number" placeholder="" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">Expires</Label>
            <Select>
              <SelectTrigger id="month">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="year">Year</Label>
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  );
}

export default PaymentMethod;
