// Centralized project metadata
// This is the single source of truth for all project information
const PROJECTS_DATA = {
    'ultrasound-bone-segmentation': {
        id: 'ultrasound-bone-segmentation',
        title: 'Ultrasound Bone Segmentation for Prosthesis Design',
        description: 'Using nnU-Net v2 to automatically segment bone and tissue from ultrasound scans for prosthesis design. This has the potential to revolutionize prosthetic fitting by making it faster, more accurate, and accessible to patients worldwide.',
        tags: ['Medical Imaging', 'nnU-Net', 'Ultrasound', 'Segmentation'],
        date: 'October 2025',
        dateLabel: 'Last update',
        image: 'images/kidis_leg_segmentation.gif',
        imageAlt: 'Ultrasound bone segmentation',
        url: 'topics/ultrasound-bone-segmentation.html',
        locked: true,
        lockReason: 'Confidential medical research data and proprietary algorithms'
    },
    'wall-segmentation': {
        id: 'wall-segmentation',
        title: 'Wall Segmentation in Floorplans using Mask R-CNN',
        description: 'Training Mask R-CNN to detect and segment walls in floorplan images. This enables automated architectural analysis for construction applications.',
        tags: ['Computer Vision', 'Deep Learning', 'Mask R-CNN', 'Segmentation'],
        date: 'July 2024',
        dateLabel: 'Completed',
        image: 'images/bounding-boxes.png',
        imageAlt: 'Wall segmentation bounding boxes',
        url: 'topics/wall-segmentation.html'
    },
    'wall-segmentation-geometric': {
        id: 'wall-segmentation-geometric',
        title: 'Wall Segmentation in Floorplans using Geometric Approach',
        description: 'Using traditional computer vision techniques to segment walls in floorplans. This provides a lightweight, interpretable alternative to deep learning that works without training data.',
        tags: ['Computer Vision', 'OpenCV','Geometric Processing', 'Segmentation'],
        date: 'July 2024',
        dateLabel: 'Completed',
        image: 'images/colored-room-separation.jpg',
        imageAlt: 'Room segmentation',
        url: 'topics/wall-segmentation-geometric.html'
    },
    'motion-detection': {
        id: 'motion-detection',
        title: 'Motion Detection using Background Subtraction Techniques',
        description: 'Testing different background subtraction algorithms for motion detection. This research helps optimize surveillance systems and traffic monitoring for real-time applications.',
        tags: ['Computer Vision', 'Motion Detection', 'OpenCV'],
        date: 'December 2023',
        dateLabel: 'Completed',
        image: 'images/cars-comparison-video-1-min.gif',
        imageAlt: 'Motion detection comparison',
        url: 'topics/motion-detection.html'
    },
    'log-analysis-tool': {
        id: 'log-analysis-tool',
        title: 'Support Analysis Tool using Generative AI workflows',
        description: 'Internal tool that uses LangChain SQL Agent to convert natural language questions into database queries, helping support teams diagnose issues 35% faster.',
        tags: ['LangChain', 'NLP', 'Generative AI', 'Agents'],
        date: 'October 2025',
        dateLabel: 'Last update',
        image: 'images/langchain.png',
        imageAlt: 'AI-powered log analysis',
        url: 'topics/log-analysis-tool.html'
    },
    'time-dependent-route-planning': {
        id: 'time-dependent-route-planning',
        title: 'Time-Dependent Route Planning with A* Search',
        description: 'Extended AIMA-Java with time-based routing using A* search algorithm. Routes are optimized for travel time instead of distance.',
        tags: ['AI', 'A* Search', 'Route Planning'],
        date: 'November 2024',
        dateLabel: 'Completed',
        image: 'images/route-planning-time.jpg',
        imageAlt: 'Time-optimized route planning',
        url: 'topics/time-dependent-route-planning.html'
    }
};

// Helper function to get project data by ID
function getProjectData(projectId) {
    return PROJECTS_DATA[projectId];
}

// Helper function to get all projects as an array
function getAllProjects() {
    return Object.values(PROJECTS_DATA);
}
