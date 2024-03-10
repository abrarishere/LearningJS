import os

# Define the base folder name
base_folder = "day"

# Specify the range of days
start_day = 21
end_day = 100

# Loop through each day to create folders and files
for day in range(start_day, end_day + 1):
    # Create folder name
    folder_name = f"{base_folder}{day}"

    # Create folder if it doesn't exist
    os.makedirs(folder_name, exist_ok=True)

    # Create index.html file with dynamic title and link to style.css and index.js
    with open(os.path.join(folder_name, "index.html"), "w") as html_file:
        html_file.write(f'<!DOCTYPE html>\n<html lang="en">\n<head>\n')
        html_file.write('  <meta charset="UTF-8">\n')
        html_file.write('  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n')
        html_file.write('  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n')
        html_file.write(f'  <link rel="stylesheet" href="style.css">\n')
        html_file.write(f'  <title>Day {day}</title>\n')
        html_file.write('</head>\n<body>\n')
        html_file.write('  <script src="index.js"></script>\n')
        html_file.write('</body>\n</html>')

    # Create style.css file with some basic styles
    with open(os.path.join(folder_name, "style.css"), "w") as css_file:
        css_file.write('body {\n')
        css_file.write('  font-family: Arial, sans-serif;\n')
        css_file.write('  background-color: #f0f0f0;\n')
        css_file.write('  color: #333;\n')
        css_file.write('}\n')

    # Create index.js file with a basic alert
    with open(os.path.join(folder_name, "index.js"), "w") as js_file:
        js_file.write('// JavaScript code for Day {day}\n')
        js_file.write('alert("Hello from Day {day}!");\n')

print("Folders and files created successfully.")
