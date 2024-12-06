import { auth, signOut } from "@/auth";
import Counter from "@/components/counter";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
      <Counter />
    </div>
  );
};

export default SettingsPage;
