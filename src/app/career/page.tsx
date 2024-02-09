import React from "react";
import { CareerComponent } from "@/presentation/components/private-components/career-component";

type CareerProps = {
  onSubmit: (data: any) => void;
};

export default function Career({ onSubmit }: CareerProps) {
  return <CareerComponent onSubmit={onSubmit} />;
}
