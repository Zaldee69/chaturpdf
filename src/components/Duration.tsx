import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const Duration = () => {
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
            <RadioGroupItem
              value="monthly_1"
              id="monthly_1"
              className="peer sr-only"
            />
            <Label
              htmlFor="monthly_1"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 min-h-[105px]  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <div className={cn("relative")}>
                <div className="absolute -top-7 left-0 right-0 mx-auto w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-3  text-sm font-medium text-white">
                  1 Month
                </div>

                <div className="p-5">
                  <p className=" text-center font-display line-through text-zinc-500 opacity-0">
                    Rp125.000
                  </p>
                  <h3 className="my-3 text-center font-display text-3xl font-bold">
                    Rp125.000
                  </h3>
                  <p className="text-gray-500">IDR/MO</p>
                </div>
              </div>
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="monthly_12"
              id="monthly_12"
              className="peer sr-only"
            />
            <Label
              htmlFor="monthly_12"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 min-h-[105px]  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <div className={cn("relative")}>
                <div className="absolute -top-7 left-0 right-0 mx-auto w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-3  text-sm font-medium text-white">
                  12 Month
                </div>

                <div className="p-5">
                  <p className=" text-center font-display line-through text-zinc-500">
                    Rp125.000
                  </p>
                  <h3 className="my-3 text-center font-display text-3xl font-bold">
                    Rp62.500
                  </h3>
                  <p className="text-gray-500">IDR/MO</p>
                </div>
              </div>
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="monthly_24"
              id="monthly_24"
              className="peer sr-only"
            />
            <Label
              htmlFor="monthly_24"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 min-h-[105px]  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <div className={cn("relative")}>
                <div className="absolute -top-7 left-0 right-0 mx-auto w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-3  text-sm font-medium text-white">
                  24 Month
                </div>

                <div className="p-5">
                  <p className="text-center font-display line-through text-zinc-500">
                    Rp125.000
                  </p>
                  <h3 className="my-3 text-center font-display text-3xl font-bold">
                    Rp62.500
                  </h3>
                  <p className="text-gray-500">IDR/MO</p>
                </div>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Duration;
