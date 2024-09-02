import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login_button";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-950">
      <div className="space-y-6 text-center">
        <h1 className="font-semibold text-8xl text-[#f0ebeb] drop-shadow-md">
          Auth
        </h1>
        <p className="text-2xl text-[#f0ebeb]">
          An authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="outline" size="xl">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
