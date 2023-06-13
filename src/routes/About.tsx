import { Link } from "react-router-dom";
import logo from "../assets/fil-plus-white.svg";

const About = () => {
  const listItems = [
    "Enhance Transparency and Maintain Standards: This public dashboard serves as a transparent platform, allowing us to showcase the performance of Fil+ tooling. In the event of bugs or service interruptions, any drop in activity will be clearly visible here.",
    "Highlight Fil+ Notary App Throughput: We emphasize the throughput of the widely utilized Fil+ notary app, providing valuable insights into its efficiency and effectiveness.",
    "Central Hub for Fil+ Notary Tooling Metrics: Our aim is to make this dashboard the central location for viewing metrics related to all the notary tooling developed by the Keyko team. This includes the Fil+ registry, SA Bot, and LDN bot.",
    "Accountability and Transparency: We have built this website to hold ourselves accountable for the performance of our tooling while also promoting transparency about our ongoing development efforts.",
    "Server Status Monitoring: This website also serves as a 'server status' page, enabling users to check if they can log in to the Fil+ app and sign applications without any issues.",
    "Future Expansion: In the near future, we plan to emit and track events for other tooling functionalities, such as the SA bot and LDN bot, which are responsible for posting comments on LDN applications."
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-filecoin-blue to-[#39c1cb] h-[300px] text-white flex flex-col">
        <Link to="/" className="container mx-auto -translate-x-8 mt-6">
          <img src={logo} alt="" className="h-20" />
        </Link>

        <div className="container mx-auto font-bold text-3xl tracking-wide mt-6">
          About Fil+ Metrics
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto bg-white rounded-md shadow-lg -translate-y-16 p-5">
          <div>
            <h4 className="text-xl font-semibold">
              Welcome to the Metrics Dashboard!
            </h4>
            <p className="pt-4 text-[15px]">
              Over the last few months, we have been continuously improving our
              Fil+ tooling and have exciting updates planned for the near
              future. We believe that Fil+ tooling plays a critical role in the
              Fil+ program, serving as the primary means for issuing datacap and
              organizing LDN applications.
            </p>
            <p className="pt-4 text-[15px]">
              Given the rapid development and significant changes on the
              horizon, it is crucial to monitor the performance of our tooling.
              The Keyko team has been dedicatedly working on this dashboard,
              with a focus on measuring user experience metrics. Our dashboard
              is designed to accomplish the following objectives:
            </p>
            <ol className="list-decimal list-inside pt-4 text-[15px]">
              {listItems.map((item, index) => {
                return (
                  <li key={index} className="pt-4">
                    {item}
                  </li>
                );
              })}
            </ol>
            <p className="pt-4 text-[15px]">
              If you have any questions or require further assistance, please
              feel free to reach out to{" "}
              <span className="font-semibold">@Philippe Pangestu </span> on the
              FF Slack. Look at here for more details on this dashboard:
              <a
                href="https://medium.com/filecoin-plus/fil-notary-app-and-github-tooling-metrics-dashboard-v0-1-2012a9ed961f"
                className="text-filecoin-blue pl-1 hover:text-gray-400"
              >
                https://medium.com/filecoin-plus/fil-notary-app-and-github-tooling-metrics-dashboard-v0-1-2012a9ed961f
              </a>
            </p>
            <p className="pt-4 text-[15px]">
              We value your feedback and look forward to continuously improving
              our Fil+ tooling based on your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
