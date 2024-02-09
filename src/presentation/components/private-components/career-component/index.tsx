"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const schema = z.object({
  company: z.string().min(3),
  position: z.string().min(3),
  from: z.string().min(3),
  to: z.string().min(3),
});

type FormData = z.infer<typeof schema>;

interface CareerComponentProps {
  onSubmit: (data: FormData) => void;
}

export const CareerComponent: React.FC<CareerComponentProps> = ({
  onSubmit: propOnSubmit,
}) => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("res: ", data);
    propOnSubmit(data);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 p-4">
      <div className="flex justify-between">
        <form className="flex gap-4">
          <Input placeholder="Company" />
          <Button variant={"secondary"} type="submit">
            Filter
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Career</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Create Career</DialogTitle>
                <DialogDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, voluptate.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="company" className="text-right">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value="Example Company"
                    className="col-span-3"
                    {...register("company")}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="position" className="text-right">
                    Position
                  </Label>
                  <Input
                    id="position"
                    value="Software Developer"
                    className="col-span-3"
                    {...register("position")}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="from" className="text-right">
                    From
                  </Label>
                  <Input
                    id="from"
                    value="2019"
                    className="col-span-3"
                    {...register("from")}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="to" className="text-right">
                    To
                  </Label>
                  <Input
                    id="to"
                    value="Present"
                    className="col-span-3"
                    {...register("to")}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save Career</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table className="bg-white rounded-lg">
        <TableHeader>
          <TableHead>Company</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <TableRow key={index}>
                <TableCell>Company {index}</TableCell>
                <TableCell>Position {index}</TableCell>
                <TableCell>From {index}</TableCell>
                <TableCell>To {index}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
