# Fil+ Metrics App

## About the Project

The Fil+ Metrics app measures the experience of users using the [Fil+ Registry](https://filplus.fil.org/#/) app.

## Features

Users are able to view:
- Number of Successful Proposals/Approvals
- Number of Failed Proposals/Approvals
- Number of Successful Ledger Logins
- Number of Failed Ledger Logins
- Number of GitHub Logins
- Number of Failed Logins
- Number of Bugs Opened/Closed for the Registry app

## Technologies

- React: A JavaScript framework for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Vite: A fast build tool and development server for modern web projects.
- React Query: A library for managing server state and data fetching in React applications.
- ECharts: A powerful charting and visualization library for JavaScript.


## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/keyko-io/filplus-metrics.git`
2. Navigate to the project directory: `cd filplus-metrics`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open a web browser and go to `http://localhost:5173/` to access the application.

## Configuration

To run the project, you need to set the following environment variable:

- `VITE_API_URI`: The backend API URI for establishing the connection.

You can set the environment variable by creating a `.env` file in the root directory of the project and adding the following line:

```
VITE_API_URI=https://test.verification.rocks
```

## Contributing

We welcome contributions from the community! To contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-branch`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin my-branch`
5. Open a pull request describing your changes.

## Contact

For any questions or feedback, @Philippe Pangestu on the FF Slack.
