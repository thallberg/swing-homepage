"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { InfocardSection } from "../info-card/info.card";
import { contactSuccessInfo } from "../../../app/data/content/success-content/contact-success.data";

type ContactFormProps = {
  className?: string;
};

/* =========================
   ZOD SCHEMA
========================= */
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Namnet måste vara minst 2 tecken.",
  }),
  email: z.string().email({
    message: "Ange en giltig e-postadress.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Meddelandet måste vara minst 10 tecken.",
    })
    .max(200, {
      message: "Meddelandet får vara högst 200 tecken.",
    }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/* =========================
   COMPONENT
========================= */
export function ContactForm({ className }: ContactFormProps) {
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
    // TODO: API / mail senare
    setSubmitted(true);
  }

  /* =========================
     SUCCESS STATE
  ========================= */
  if (submitted) {
    return (
      <div className={cn("w-full", className)}>
        <InfocardSection
          items={contactSuccessInfo}
          cardClassName="border-0 shadow-none bg-transparent max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]"
          className="m-auto"
        />
      </div>
    );
  }

  /* =========================
     FORM
  ========================= */
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6", className)}
      >
        {/* Namn */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Namn</FormLabel>
              <FormControl>
                <Input placeholder="Ditt namn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-post</FormLabel>
              <FormControl>
                <Input type="email" placeholder="din@email.se" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Meddelande */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meddelande</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Skriv ditt meddelande här…"
                  rows={5}
                  maxLength={200}
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormDescription className="flex justify-between">
                <span>Max 200 tecken.</span>
                <span>{field.value.length}/200</span>
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant='orange' type="submit" className="w-full h-11">
          Skicka meddelande
        </Button>
      </form>
    </Form>
  );
}
