import React from "react";

// Images

// Queen Healthcare
import QueenHome from "../Images/Projects/queen_healthcare/home.PNG";
import QueenContactMobile from "../Images/Projects/queen_healthcare/contact-mobile.PNG";
import QueenJobs from "../Images/Projects/queen_healthcare/jobs.PNG";
import QueenJobMobile from "../Images/Projects/queen_healthcare/job-mobile.PNG";

// Blauair
import BlauairAboutMobile from "../Images/Projects/blauair/about-mobile.PNG";
import BlauairResourcesMobile from "../Images/Projects/blauair/resources-mobile.PNG";
import BlauairResources from "../Images/Projects/blauair/resources.PNG";

// Diamond Point
import DPAllInfo from "../Images/Projects/diamond_point/all-info.png";
import DPContractor from "../Images/Projects/diamond_point/contractor.png";
import DPHome from "../Images/Projects/diamond_point/home.png";
import DPIncomingCallsMobile from "../Images/Projects/diamond_point/incoming-calls-mobile.png";
import DPOutgoingCalls from "../Images/Projects/diamond_point/outgoing-calls.png";
import DPPlanner from "../Images/Projects/diamond_point/planner.png";
import DPSearch from "../Images/Projects/diamond_point/search.png";

// Everbold
import EverboldHome from "../Images/Projects/everbold/home.PNG";
import EverboldMobile from "../Images/Projects/everbold/mobile.PNG";

// Cover in a click
import CIACHome from "../Images/Projects/cover_in_a_click/home_desktop.png";
import CIACChangeMobile from "../Images/Projects/cover_in_a_click/change_mobile.png";
import CIACBlog from "../Images/Projects/cover_in_a_click/blog_desktop.png";
import CIACRenew from "../Images/Projects/cover_in_a_click/renew_desktop.png";
import CIACRenewMobile from "../Images/Projects/cover_in_a_click/renew_mobile.png";

const projects = [
    {
        name: "Cover In A Click",
        slug: "cover-in-a-click",
        date_worked: "November 2021 - February 2022",
        technologies: [
            "ReactJS",
            "NodeJS",
            "SASS",
            "MongoDB",
            "Redux",
            "Express",
            "Redux Forms"
        ],
        description: "Cover in a click is an Irish company who provides car insurance particularly to younger drivers!",
        features: [
            "Admin Panel",
            "Get a Quote Form",
            "Renew Policy Form",
            "Request Policy Change Form",
            "Responsive",
            "Blog Section"
        ],
        involvement: (
            <>
                <p>I worked on Cover in a click with one fellow developer. That developer done the majority of the work including the Get a Quote form, however I was tasked with developing the Renew Policy Form and Request Policy Change form. I also performed general maintanence throughout the site and fixed bugs!</p>
                <p>While developing the Renew Policy Form, I was introduced to global payments. This is an external API that returns a payment form when a successful request is made. I also was introduced to implementing Recaptcha and an Address lookup component as seen on many websites!</p>
                <p>I am really happy with the work I done on this site and feel that completing the above tasks helped improve my skills and increased my confidence where I to take up a similar project in the future whether it be as a part of a team or by myself.</p>
            </>
        ),
        featured_image: {
            src: CIACHome,
            alt: "Cover in a click home page desktop",
            title: "Home page on desktop view.",
        },
        images: [
            {
                src: CIACChangeMobile,
                alt: "Cover in a click change policy mobile view",
                title: "Change policy form on mobile view."
            },
            {
                src: CIACBlog,
                alt: "Desktop blog page cover in a click",
                title: "Blog page on desktop view."
            },
            {
                src: CIACRenew,
                alt: "Desktop Cover in a click renew policy Page",
                title: "Renew policy form on desktop view."
            },
            {
                src: CIACRenewMobile,
                alt: "Mobile Cover in a click renew policy Page",
                title: "Renew policy form on mobile view."
            }
        ]
    },
    {
        name: "Queen Healthcare",
        slug: "queenhealthcare",
        date_worked: "November 2021 - December 2021",
        type: "Recruitment Website",
        technologies: [
            "ReactJS",
            "NodeJS",
            "SASS",
            "MongoDB",
            "Redux",
            "Express",
            "Redux Forms"
        ],
        description: "Queen Healthcare is a recruitment website where users can search and apply for suitable jobs!",
        features: [
            "Job Search Component",
            "Filter search by keyword, location or work area",
            "Contact Form",
            "Job Application form with cv and cover letter upload",
            "Blog Section",
            "Admin console to manage content of website and view form submissions",
            "Fully responsive design"
        ],
        involvement: (
            <>
            <p>
                I was the only developer working on this project, I worked on both the React frontend and the NodeJS backend. The styling was done using Node Sass and flexbox was prominantly used across all components. This website involved quite 
                a number of forms across the client side and admin panel therefore redux forms was used to easily manage form values. All data was handled with Redux with any action functions containing API requests were made using fetch.
            </p>
            <p>
                Despite being comfortable using functional components with React hooks, this project was made with the majority of components being class based at the request of my employer. I also used <bold>connect</bold> from React Redux to connect
                my components to the reducers.
            </p>
            </>
        ),
        featured_image: {
            src: QueenHome,
            alt: "Queen Healthcare Home Page",
            title: "Home page on desktop view.",
        },
        images: [
            {
                src: QueenContactMobile,
                alt: "Queen Healthcare Contact Page Mobile",
                title: "Contact page on mobile view."
            },
            {
                src: QueenJobMobile,
                alt: "Mobile Job Page Queen Healthcare",
                title: "Individual job page on mobile view."
            },
            {
                src: QueenJobs,
                alt: "Desktop Queen Healthcare Jobs Page",
                title: "Jobs results page on desktop view."
            }
        ]
    },
    {
        name: "Everboold",
        slug: "everbold",
        date_worked: "August 2021 - October 2021",
        type: "Brochure Website",
        technologies: [
            "ReactJS",
            "NodeJS",
            "SASS",
            "MongoDB",
            "Redux",
            "Express",
            "Redux Forms"
        ],
        description: "This is a brochure website to showcase Everbold which is Digigrows marketing brand!",
        features: [
            "Lazy Component Loading",
            "Admin Panel to edit content",
            "Contact Form",
            "Blog Section",
            "Request a call back",
            "Fully responsive",
            "Elements that animate on scroll"
        ],
        involvement: (
            <>
                <p>I was one of two developers on this project and it was my first project as a member of Digigrow. The work was divided up equally and we worked as a team to ensure work was being done as efficiently as possible. We used class based components with <bold>connect</bold> from React-Redux to link everything together in terms of data.</p>
                <p>We styled all components using Node Sass and created each component individually and then compiled them together in their respective pages. Once that was complete we tackled the functionality like the forms and linked them to the admin panel via Node/Express/MongoDB.</p>
            </>
        ),
        images: [
            {
                src: EverboldMobile,
                alt: "Mobile view of everbold home page",
                title: "Blog page on mobile view."
            }
        ],
        featured_image: {
            src: EverboldHome,
            alt: "Home Page of everbold desktop view",
            title: "Homepage on desktop view.",            
        }
    },
    {
        name: "Diamond Point Web App",
        slug: "diamond-point",
        date_worked: "January 2021 - July 2021",
        type: "Web Application",
        technologies: [
            "ReactJS",
            "Bootstrap",
            "TailwindCSS",
            "NodeJS",
            "Redux",
            "Express",
            "MongoDB"
        ],
        description: "This project is a web application for security company to manage client data, log contact events such as calls, meetings and emails.",
        features: [
            "Datatables list of all clients",
            "Import clients from excel or csv file",
            "Export client info to csv or pdf",
            "Crud functionality for calls, meetings and emails",
            "Calendar screen with events added to dates dynamically",
            "Prefilled data when logging an event related to a client",
            "Responsive"
        ],
        involvement: (
            <>
                <p>On this project I was the only developer working on it, I was in regular contact with the client to ensure any additions/changes were implemented to meet the clients desires. The client previously used Microsoft Excel to track keep log of this information so I implemented a file upload that would read an excel file, convert each row into JSON and upload it to the mongodb database.</p>
                <p>For this project I used Bootstrap for fundamental styling/page layout to structure where elements would go and to ensure responsiveness. I used tailwindCSS to style other components/elements in greater detail.</p>
                <p>I used functional components for this project as using React Hooks for state and redux management is my preferred method. I used hooks such as <bold>useSelector</bold>, <bold>useState</bold> and <bold>useEffect</bold> to manage component data and their life cycle functionality.</p>
            </>
        ),
        images: [
            {
                src: DPIncomingCallsMobile,
                alt: "Incoming Calls Diamond Point Mobile",
                title: "Incoming calls page on mobile view."
            },
            {
                src: DPOutgoingCalls,
                alt: "Outgoing Calls Diamond Point",
                title: "Outgoing calls page on desktop view."
            },
            {
                src: DPPlanner,
                alt: "Diamond Point Planner",
                title: "Planner on desktop view."
            },
            {
                src: DPAllInfo,
                alt: "Diamond Point All Info",
                title: "Contractor info modal on desktop view."
            },
            {
                src: DPContractor,
                alt: "Diamond Point Contractor",
                title: "Main contractor page on desktop view."
            },
            {
                src: DPSearch,
                alt: "Search Contractor Diamond Point",
                title: "Live contractor search on desktop view."
            }
        ],
        featured_image: {
            src: DPHome,
            alt: "Diamond point home screen",
            title: "Home screen on desktop view."
        }
    },
    {
        name: "Blauair",
        slug: "blauair",
        date_worked: "December 2021",
        type: "E-commerce Site",
        technologies: [
            "ReactJS",
            "SASS",
            "NodeJS",
            "Express",
            "MongoDB",
            "Redux",
            "Redux Forms"
        ],
        description: "An e-commerce website for Blauair which is a company who supplies industrial fans.",
        features: [],
        involvement: (
            <>
                <p>This project had to be completed in a small time frame so comprised of 4 3/4 developers working on it. I myself was tasked at completing the "Resources" page and the "About" page.</p>
                <p>The resources page contained a selector to toggle between 3 different types of resources. Clicking this toggle button would refresh the list of resources, paginate them and also style each type uniquely. I created the toggle component seen in the image above and hooked it up to the redux store so that evrery time a user interacted with it, the selected value was saved in the gobal state.</p>
                <p>
                    The challenge was updating the list of resources when the store's "type" value had changed. In order to do this, I used the <strong>componentDidUpdate</strong> method and compared the current type with the previous one. If they differed then I would recall the function that fetched/paginated the resources by type. Using this method I achieved the desired functionality.
                </p>
                <p>
                    I also worked on the about page which was more straight forward. I primary used flexbox to layout the page and all it's different components. This ensured easy responsive behavior and as flexbox is primarily used in most projects at Digigrow it would benefitial to keep consistency.
                </p>
            </>
        ),
        images: [
            {
                src: BlauairAboutMobile,
                alt: "Blauair About Page Mobile View",
                title: "About page on mobile view"
            },
            {
                src: BlauairResourcesMobile,
                alt: "Blauair Resources Page Mobile View",
                title: "Resources page on mobile view."
            }
        ],
        featured_image: {
            src: BlauairResources,
            alt: "Blauir Resources Page",
            title: "Blauair Resources Page Desktop"
        }
    }
];

export default projects;