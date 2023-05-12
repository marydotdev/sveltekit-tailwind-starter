<svelte:head>
	<title>SvelteKit Tailwind Starter</title>
</svelte:head>

<div class="relative mx-auto">
	<div class="hero bg-dot-grid">
		<div class="relative bg-gradient-radial from-white to-zinc-100/20">
			<div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
				<div class="text-center font-spacemono">
					<a
						href="https://github.com/marydotdev/sveltekit-tailwind-starter"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full bg-emerald-400/20 px-3 py-1 text-sm font-semibold leading-6 text-emerald-500 ring-1 ring-inset ring-emerald-500 hover:bg-emerald-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 flex items-center gap-2 max-w-fit mx-auto"
					>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/>
							</svg>
						</span>
						<span>Clone on GitHub</span>
					</a>

					<h1 class="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						<span class="text-svelte">SvelteKit</span> <span class="text-tw">Tailwind</span>
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Get up and running quickly with SvelteKit and Tailwind CSS. Includes a tailwind config
						preconfigured with the forms and typography plugins, plus custom color and font
						declarations.
					</p>
					<div class="mt-10 max-w-sm mx-auto flex items-center justify-center gap-x-2">
						<a
							href="https://kit.svelte.dev/"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-md bg-svelte/20 px-3.5 py-1.5 text-base font-semibold leading-7 text-svelte ring-1 ring-inset ring-svelte shadow-sm hover:bg-svelte/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-svelte flex items-center gap-2 max-w-fit mx-auto"
							>SvelteKit Docs</a
						>
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-md bg-tw/20 px-3.5 py-1.5 text-base font-semibold leading-7 text-tw ring-1 ring-inset ring-tw shadow-sm hover:bg-tw/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tw flex items-center gap-2 max-w-fit mx-auto"
							>Tailwind Docs</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="w-full flex flex-col">
		<!-- Forms -->
		<div class="w-full bg-sky-200">
			<div class="px-2 py-12 sm:py-24 max-w-6xl mx-auto">
				<div class="grid sm:grid-cols-3">
					<!-- require('@tailwindcss/forms') -->
					<div class="pb-8 col-span-1">
						<a
							href="https://github.com/tailwindlabs/tailwindcss-forms"
							class="font-spacemono text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 rounded-md"
							>Forms</a
						>
					</div>
					<form
						class="border-2 border-gray-400 rounded-md bg-white p-4 col-span-2 space-y-8 divide-y divide-gray-200"
					>
						<div class="space-y-8 divide-y divide-gray-200">
							<div>
								<div>
									<h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
									<p class="mt-1 text-sm text-gray-500">
										Use a permanent address where you can receive mail.
									</p>
								</div>
								<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
									<div class="sm:col-span-3">
										<label for="first-name" class="block text-sm font-medium text-gray-700"
											>First name</label
										>
										<div class="mt-1">
											<input
												type="text"
												name="first-name"
												id="first-name"
												autocomplete="given-name"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>

									<div class="sm:col-span-3">
										<label for="last-name" class="block text-sm font-medium text-gray-700"
											>Last name</label
										>
										<div class="mt-1">
											<input
												type="text"
												name="last-name"
												id="last-name"
												autocomplete="family-name"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>

									<div class="sm:col-span-4">
										<label for="email" class="block text-sm font-medium text-gray-700"
											>Email address</label
										>
										<div class="mt-1">
											<input
												id="email"
												name="email"
												type="email"
												autocomplete="email"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>

									<div class="sm:col-span-3">
										<label for="country" class="block text-sm font-medium text-gray-700"
											>Country</label
										>
										<div class="mt-1">
											<select
												id="country"
												name="country"
												autocomplete="country-name"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											>
												<option>United States</option>
												<option>Canada</option>
												<option>Mexico</option>
											</select>
										</div>
									</div>

									<div class="sm:col-span-6">
										<label for="street-address" class="block text-sm font-medium text-gray-700"
											>Street address</label
										>
										<div class="mt-1">
											<input
												type="text"
												name="street-address"
												id="street-address"
												autocomplete="street-address"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>

									<div class="sm:col-span-2">
										<label for="city" class="block text-sm font-medium text-gray-700">City</label>
										<div class="mt-1">
											<input
												type="text"
												name="city"
												id="city"
												autocomplete="address-level2"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>

									<div class="sm:col-span-2">
										<label for="region" class="block text-sm font-medium text-gray-700"
											>State / Province</label
										>
										<div class="mt-1">
											<input
												type="text"
												name="region"
												id="region"
												autocomplete="address-level1"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>

									<div class="sm:col-span-2">
										<label for="postal-code" class="block text-sm font-medium text-gray-700"
											>ZIP / Postal code</label
										>
										<div class="mt-1">
											<input
												type="text"
												name="postal-code"
												id="postal-code"
												autocomplete="postal-code"
												class="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="pt-5">
							<div class="flex justify-end">
								<button
									type="button"
									class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
									>Cancel</button
								>
								<button
									type="submit"
									class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
									>Save</button
								>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

		<!--Line Clamp-->
		<div class="w-full bg-red-200">
			<div class="px-2 py-12 sm:py-24 max-w-6xl mx-auto">
				<!-- as of Tailwind CSS v3.3 the '@tailwind/line-clamp' plugin is now included by default  -->
				<div class="grid sm:grid-cols-3">
					<div class="col-span-1 pb-8">
						<a
							href="https://github.com/tailwindlabs/tailwindcss-line-clamp"
							class="font-spacemono text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 rounded-md"
							>Line Clamp</a
						>
					</div>
					<div class="col-span-2 flex flex-col gap-8">
						<p class="line-clamp-3">
							Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro
							ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil.
							Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos
							quos id ut molestiae fugit.
						</p>

						<p class="line-clamp-4">
							Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro
							ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil.
							Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos
							quos id ut molestiae fugit.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Typography -->
		<div class="w-full bg-amber-200">
			<div class="px-2 py-12 sm:py-24 max-w-6xl mx-auto">
				<!-- require('@tailwindcss/typography') -->
				<div class="grid sm:grid-cols-3">
					<div class="col-span-1 pb-8">
						<a
							href="https://github.com/tailwindlabs/tailwindcss-typography"
							class="font-spacemono hyphens-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-md"
							>Typo&shy;graphy</a
						>
					</div>
					<article class="col-span-2 prose lg:prose-xl mx-auto">
						<h1>Garlic bread with cheese: What the science tells us</h1>
						<p>
							For years parents have espoused the health benefits of eating garlic bread with cheese
							to their children, with the food earning such an iconic status in our culture that
							kids will often dress up as warm, cheesy loaf for Halloween.
						</p>
						<p>
							But a recent study shows that the celebrated appetizer may be linked to a series of
							rabies cases springing up around the country.
						</p>
					</article>
				</div>
			</div>
		</div>
	</div>
</div>
