import { UserComponent } from "@/presentation/components/private-components/user-component";

type UserProps = {
  onSubmit: (data: any) => void;
};

export default function User({ onSubmit }: UserProps) {
  return <UserComponent onSubmit={onSubmit} />;
}
