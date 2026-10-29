# 🌦️ Weather Forecast Web Application

A simple and responsive web application that allows users to check weather information for different cities using the OpenWeatherMap API. This project demonstrates the practical implementation of HTML, CSS, JavaScript, and API integration in web development.

## 📌 Project Overview

The **Weather Forecast Web Application** is designed to provide users with weather information by entering a city name. The application sends a request to the OpenWeatherMap API, retrieves weather data, and displays the available information through a user-friendly interface.

This project was developed as a **Web Programming Mini Project** to demonstrate the use of front-end technologies, asynchronous JavaScript, API integration, and JSON data handling.

## ✨ Features

* 🔍 Search for weather information by city name.
* 🌡️ Display the current temperature.
* 🌤️ Show weather conditions and descriptions.
* 💧 Display humidity information, if implemented.
* 💨 Display wind speed, if implemented.
* ⚠️ Handle invalid city names and API request errors.
* 📱 Responsive user interface, depending on the implemented CSS.
* 🌐 Fetch live weather information using the OpenWeatherMap API.

*Note: The features displayed depend on the functionality implemented in the project source code.*

## 🛠️ Technologies Used

| Technology         | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| HTML5              | Structures the web page.                         |
| CSS3               | Styles the application interface.                |
| JavaScript         | Handles user interactions and application logic. |
| Fetch API          | Sends HTTP requests to retrieve weather data.    |
| OpenWeatherMap API | Provides weather information.                    |
| Visual Studio Code | Used for project development.                    |
| Web Browser        | Runs the application.                            |

## 📂 Project Structure

The following is a typical project structure. Update the filenames if your actual project uses a different structure.

```text
Weather-Forecast-Web-Application/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
    ├── home-page.png
    └── weather-result.png
```

### File Description

* **index.html** — Contains the structure of the web application.
* **style.css** — Defines the appearance, layout, and styling.
* **script.js** — Handles user input, API requests, and weather data display.
* **README.md** — Documents the project, installation instructions, and features.
* **screenshots/** — Stores screenshots of the running application, if added.

## ⚙️ Requirements

Before running the project, ensure that you have:

* A modern web browser, such as Google Chrome or Microsoft Edge.
* Visual Studio Code or another code editor.
* An active internet connection.
* An OpenWeatherMap API key.

## 🚀 Installation and Setup

### Step 1: Clone the Repository

Open your terminal and execute the following command, replacing the placeholders with your actual GitHub username and repository name.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### Step 2: Open the Project

Navigate to the project folder:

```bash
cd YOUR-REPOSITORY
```

You can also download the repository as a ZIP file from GitHub and extract it.

### Step 3: Configure the API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/).
2. Create an account if you do not already have one.
3. Generate an API key.
4. Open the JavaScript file responsible for fetching weather data.
5. Configure the API key according to the existing code.

Example:

```javascript
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
```

**Security Note:** Do not upload a private API key to a public GitHub repository. API keys included in front-end JavaScript can be viewed by users. For a production application, use a backend service to protect the key.

### Step 4: Run the Application

You can run the application using either method:

**Method 1: Open in a Browser**

1. Locate `index.html`.
2. Open the file in your web browser.
3. Enter a city name and search for its weather.

**Method 2: Using Visual Studio Code**

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if needed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The application should open in your default browser.

*If your project uses a different setup, follow the instructions required by your source code.*

## 🖥️ How to Use

1. Open the Weather Forecast Web Application.
2. Enter the name of the city you want to check.
3. Click the search button or press Enter, if supported.
4. Wait for the application to retrieve the weather information.
5. View the weather details displayed on the screen.
6. Enter another city name to check its weather.

If the application cannot retrieve the information, verify the spelling of the city, internet connection, and API configuration.

## 🔌 API Integration

The application uses the **OpenWeatherMap API** to retrieve weather information.

### How It Works

1. The user enters a city name.
2. JavaScript reads the entered city.
3. The Fetch API sends an HTTP request to OpenWeatherMap.
4. The API processes the request and returns weather data in JSON format.
5. JavaScript extracts the required information.
6. The application displays the weather details on the web page.
7. Errors are handled when a request fails, if error handling is implemented.

For additional information, refer to the official [OpenWeatherMap API Documentation](https://openweathermap.org/api).

## 🧪 Testing

The following test cases can be used to evaluate the application.

| Test Case                                | Expected Result                                                    |
| ---------------------------------------- | ------------------------------------------------------------------ |
| Enter a valid city name                  | Weather information is displayed.                                  |
| Enter an invalid city name               | An appropriate error message is displayed.                         |
| Submit an empty search field             | The application handles the empty input appropriately.             |
| Use an invalid API key                   | The request fails and the error is handled.                        |
| Disconnect the internet                  | The application handles the failed request.                        |
| Search for multiple cities               | The displayed information updates for the selected city.           |
| Open the application on a smaller screen | The interface remains usable if responsive styling is implemented. |

**Note:** These are planned test cases. Mark them as passed only after testing the actual application.

## ⚠️ Limitations

* The application requires an internet connection to retrieve weather information.
* Weather data depends on the availability of the OpenWeatherMap API.
* API usage may be subject to account restrictions and request limits.
* Incorrect city names may result in unsuccessful searches.
* A publicly exposed API key may be misused.
* Available functionality depends on the features implemented in the source code.

## 🔮 Future Enhancements

The application can be improved by introducing the following features:

* 📅 Multi-day weather forecasting.
* 📍 Location-based weather information with user permission.
* 🌡️ Celsius and Fahrenheit temperature selection.
* 🕘 Recent search history.
* 🌅 Sunrise and sunset information.
* 🌧️ Weather alerts, where supported by the API.
* 📱 Improved responsive design for mobile devices.
* 🔐 Backend API integration for improved key security.
* ⏳ Loading indicators and improved error messages.
* 🧪 Automated testing for important application features.

## 📚 Learning Outcomes

This project provides practical experience in:

* Developing web pages using HTML5.
* Styling web interfaces using CSS3.
* Implementing user interactions with JavaScript.
* Fetching data from external APIs.
* Processing JSON responses.
* Handling asynchronous operations.
* Validating user input and handling errors.
* Understanding client-server communication.
* Organizing and documenting a web development project.

## 🖼️ Screenshots

Add screenshots of your actual running application to the repository to demonstrate its interface and functionality.

Example screenshot section:

### 1. Application Home Page

![Weather Forecast Application Home Page](screenshots/home-page.png)

### 2. Weather Search Results

![Weather Forecast Search Results](screenshots/weather-result.png)

**Important:** Upload the actual screenshot files to the `screenshots` folder and ensure that the filenames match the image paths above. Otherwise, the images will not appear on GitHub.

## 👨‍💻 Developer Information

* **Name:** Deepjyoti Sarkar
* **Programme:** Master of Computer Applications (MCA)
* **Institution:** Chandigarh University
* **Project Title:** Weather Forecast Web Application
* **Project Type:** Web Programming Mini Project

## 📄 License

This project was developed for educational and academic purposes. No specific open-source license is implied. Add a license file if you decide to distribute the project under a particular license.

## 🙏 Acknowledgements

* [OpenWeatherMap](https://openweathermap.org/) for providing weather data and API documentation.
* The developers and communities supporting HTML, CSS, and JavaScript.
* Chandigarh University and the University Institute of Computing for providing an academic environment to develop practical programming skills.

---

⭐ **If you find this project useful, consider giving the repository a star on GitHub!**
