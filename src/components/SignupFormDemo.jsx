"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast"




export function SignupFormDemo() {
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "c587f441-dd0d-45b5-9c61-f88d0b376dae",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
      toast({
        description: "Your message has been sent.",
      });
    } else {
      toast({
        description: "Something went wrong, please try again.",
        variant: "destructive",
      });
    }
    
  }


  return (
    (
    <div>
      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className={"text-neutral-800 dark:text-neutral-300"}>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="First Name" type="text" name="firstname" />
          </LabelInputContainer>
          <LabelInputContainer className={"text-neutral-800 dark:text-neutral-300"}>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Last Name" type="text" name="lastname" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 text-neutral-800 dark:text-neutral-300">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="example@gmail.com" type="email" name="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Type your message here." className="dark:text-white" />
          </LabelInputContainer>

        <button 
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Share It &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
