import { useState } from "react";
import DemoModal from "../DemoModal";
import { Button } from "@/components/ui/button";

export default function DemoModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Demo Modal</Button>
      <DemoModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
