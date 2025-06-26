import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
	const [signupInput, setSignupInput] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [loginInput, setLoginInput] = useState({ email: "", password: "" });

	const changeInputHandler = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: string
	) => {
		const { name, value } = e.target;
		// console.log(name, value);
		// console.log(type);
		if (type === "signup") {
			setSignupInput({ ...signupInput, [name]: value });
		} else {
			setLoginInput({ ...loginInput, [name]: value });
		}
	};

	const handleRegistration = (type: "signup" | "login") => {
		const inputData = type === "signup" ? signupInput : loginInput;
		console.log(inputData);
	};

	return (
		<div className="flex items-center w-full justify-center mt-20">
			<Tabs defaultValue="signup" className="w-[400px]">
				<TabsList className="w-full grid grid-cols-2">
					<TabsTrigger value="signup">Signup</TabsTrigger>
					<TabsTrigger value="login">Login</TabsTrigger>
				</TabsList>
				<TabsContent value="signup">
					<Card>
						<CardHeader>
							<CardTitle>Signup</CardTitle>
							<CardDescription>
								Create a new account and click signup when
								you&apos;re done.
							</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-6">
							<div className="grid gap-3">
								<Label htmlFor="tabs-signup-name">Name</Label>
								<Input
									id="tabs-signup-name"
									type="text"
									name="name"
									value={signupInput.name}
									onChange={(e) =>
										changeInputHandler(e, "signup")
									}
									placeholder="Name"
									// defaultValue=""
									required={true}
								/>
							</div>
							<div className="grid gap-3">
								<Label htmlFor="tabs-signup-email">Email</Label>
								<Input
									id="tabs-signup-email"
									type="email"
									name="email"
									value={signupInput.email}
									onChange={(e) =>
										changeInputHandler(e, "signup")
									}
									placeholder="Email"
									// defaultValue=""
									required={true}
								/>
							</div>
							<div className="grid gap-3">
								<Label htmlFor="tabs-signup-password">
									Password
								</Label>
								<Input
									id="tabs-signup-password"
									type="password"
									name="password"
									value={signupInput.password}
									onChange={(e) =>
										changeInputHandler(e, "signup")
									}
									placeholder="Password"
									// defaultValue=""
									required={true}
								/>
							</div>
						</CardContent>
						<CardFooter>
							<Button
								onClick={() => handleRegistration("signup")}>
								Signup
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="login">
					<Card>
						<CardHeader>
							<CardTitle>Login</CardTitle>
							<CardDescription>
								Login with your password here. After signup,
								you&apos;ll be logged in.
							</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-6">
							<div className="grid gap-3">
								<Label htmlFor="tabs-login-email">Email</Label>
								<Input
									id="tabs-login-email"
									type="email"
									name="email"
									value={loginInput.email}
									onChange={(e) =>
										changeInputHandler(e, "login")
									}
									placeholder="Email"
									required={true}
								/>
							</div>
							<div className="grid gap-3">
								<Label htmlFor="tabs-login-password">
									password
								</Label>
								<Input
									id="tabs-login-password"
									type="password"
									name="password"
									value={loginInput.password}
									onChange={(e) =>
										changeInputHandler(e, "login")
									}
									placeholder="Password"
									required={true}
								/>
							</div>
						</CardContent>
						<CardFooter>
							<Button onClick={() => handleRegistration("login")}>
								Login
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Login;
