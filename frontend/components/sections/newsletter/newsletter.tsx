"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Newsletter() {
  return (
    <section className="bg-gray-800 py-12 text-center">
      <h2 className="mb-2 text-2xl font-semibold text-amber-100">
        Prenumerera på vårt nyhetsbrev
      </h2>

      <p className="mb-6">
        Få de senaste uppdateringarna direkt till din inkorg.
      </p>

      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        <Input
          type="email"
          placeholder="Din e-postadress"
          className="bg-background"
        />

        <Button variant='orange'>
          Prenumerera
        </Button>
      </div>
    </section>
  );
}

export { Newsletter };
