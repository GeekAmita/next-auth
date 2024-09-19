import { CardWrapper } from "@/components/auth/card_wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper 
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            Login Form!
        </CardWrapper>
    );
};