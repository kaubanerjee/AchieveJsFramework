Feature: As an admin user, perform smoke test

	Scenario Outline: Perform smoke test

		Given User launches NGA login page in a browser
		When Submits valid <username> and <password>
		Then User should be logged into the application

		# When User searches for the required course
		# And Selects the searched course
		# Then User is navigated to the course home page

		# When User selects add an activity link
		# And Click on Save and Continue after entering info in the 'Adding a new assessment' page
		# Then User should land on assignment tab of newly created course

		# When User selects Question Bank tab
		# And Add few items to the assignment
		# Then the items should be added successfully to the assignment

		# When User selects Assignment tab
		# And Select Assignment Preview option
		# Then user should be navigated to SAC page
		# And all the questions present in the assignment should be displayed

		# When User navigates back to the course home page
		# And select delete option to delete the newly added course
		# Then the course should no longer be displayed on course home page
		
	Examples:
	|username|password|
	|raptoradmin|fasterthansixmill|