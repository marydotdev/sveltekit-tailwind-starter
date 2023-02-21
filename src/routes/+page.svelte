<div class="relative mx-auto pb-12">
	<div class="hero bg-dot-grid">
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-2xl py-20 sm:py-24 lg:py-32">
				<div class="text-center font-spacemono">
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						<span class="text-svelte">SvelteKit</span> <span class="text-tw">Tailwind</span>
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
						commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
					</p>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/"
							class="rounded-md bg-sky-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Get started</a
						>
						<a href="/" class="text-base font-semibold leading-7 text-gray-900"
							>Learn more <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
		<div class="forms">
			<!-- require('@tailwindcss/forms') -->
			<div class="pb-8">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Forms</h2>
			</div>
			<form class="space-y-8 divide-y divide-gray-200">
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
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="country" class="block text-sm font-medium text-gray-700">Country</label>
								<div class="mt-1">
									<select
										id="country"
										name="country"
										autocomplete="country-name"
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
										class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
							class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>Cancel</button
						>
						<button
							type="submit"
							class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>Save</button
						>
					</div>
				</div>
			</form>
		</div>

		<div class="line-clamp">
			<!-- require('@tailwindcss/line-clamp') -->
			<div class="pb-8">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Line Clamp</h2>
			</div>
			<div class="flex flex-col gap-8">
				<p class="line-clamp-3">
					Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut
					omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui
					voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id
					ut molestiae fugit.
				</p>

				<p class="line-clamp-4">
					Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut
					omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui
					voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id
					ut molestiae fugit.
				</p>
			</div>
		</div>

		<div class="typography">
			<!-- require('@tailwindcss/typography') -->
			<div class="pb-8">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Typography</h2>
			</div>
			<article class="prose lg:prose-xl mx-auto">
				<h1>Garlic bread with cheese: What the science tells us</h1>
				<p>
					For years parents have espoused the health benefits of eating garlic bread with cheese to
					their children, with the food earning such an iconic status in our culture that kids will
					often dress up as warm, cheesy loaf for Halloween.
				</p>
				<p>
					But a recent study shows that the celebrated appetizer may be linked to a series of rabies
					cases springing up around the country.
				</p>
			</article>
		</div>
	</div>
</div>
