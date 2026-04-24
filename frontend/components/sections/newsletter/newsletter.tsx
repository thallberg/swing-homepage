"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

function Newsletter() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false)

  function onSubmit() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

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
          className="bg-background text-foreground"
        />

        <Button
        onClick={onSubmit}
          variant="orange"
          type="submit"
          className="w-full h-11 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner />
              Skickar...
            </>
          ) : (
            "Prenumera"
          )}
        </Button>
      </div>
    </section>
  );
}

export { Newsletter };
