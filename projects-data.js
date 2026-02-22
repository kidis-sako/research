// Centralized project metadata
const PROJECTS_DATA = {
    // 'medical-structure-segmentation': {
    //     id: 'medical-structure-segmentation',
    //     title: '2D+t Temporal Segmentation for Medical Structure Analysis',
    //     description: 'A 2D+t approach using nnU-Net v2 where time becomes the depth dimension, enabling spatiotemporal segmentation of anatomical structures in medical video sequences.',
    //     tags: ['Medical Imaging', 'nnU-Net', 'Spatiotemporal', '2D+t', 'Segmentation'],
    //     date: 'October 2025',
    //     dateLabel: 'Last update',
    //     image: 'images/kidis_leg_segmentation.gif',
    //     imageAlt: '2D+t temporal medical structure segmentation',
    //     url: 'topics/medical-structure-segmentation.html'
    // },
    'surfing-paper': {
        id: 'surfing-paper',
        title: 'Surfing Maneuver Recognition: When 2D Outperform Spatiotemporal 3D',
        description: 'I compared 2D and 3D convolutional architectures for surfing maneuver recognition in a small-data regime. Contrary to common assumptions in video action recognition, a 2D CNN outperforms a spatiotemporal 3D CNN.',
        tags: ['Computer Vision', 'Transfer Learning', 'Video Recognition', 'S3D'],
        date: 'November 2025',
        dateLabel: 'Completed',
        image: 'images/gradcam_roller.png',
        imageAlt: 'Surfing maneuver recognition paper',
        url: 'topics/surfing_maneuver_recognition_s3d_transfer_learning.pdf'
    },
    'hpo-optuna-cifar10': {
        id: 'hpo-optuna-cifar10',
        title: 'Hyperparameter Optimization with Optuna on CIFAR-10',
        description: 'Used Optuna\'s TPE sampler and MedianPruner to automatically optimize hyperparameters for a ResNet-50 transfer learning model on CIFAR-10. Achieved 88.55% accuracy in just 5 epochs across 30 trials',
        tags: ['Deep Learning', 'Optuna', 'Transfer Learning', 'HPO', 'PyTorch'],
        date: 'March 2025',
        dateLabel: 'Completed',
        image: 'images/optuna-param-importances.png',
        imageAlt: 'Optuna optimization history for CIFAR-10 HPO',
        url: 'topics/hpo-optuna-cifar10.html'
    },
    'log-analysis-tool': {
        id: 'log-analysis-tool',
        title: 'Multi-Agent Log and Database Diagnostics Tool',
        description: 'Multi-agent workflow where agents communicate to retrieve data from Kibana Elasticsearch and databases.',
        tags: ['LangChain', 'Generative AI', 'Agents', 'Logs'],
        date: 'October 2025',
        dateLabel: 'Last update',
        image: 'images/langchain.png',
        imageAlt: 'AI-powered log analysis',
        url: 'topics/log-analysis-tool.html'
    },
    'cnn-quickdraw-classification': {
        id: 'cnn-quickdraw-classification',
        title: 'Quick Draw Doodle Classification with CNNs',
        description: 'A modified architecture grouping convolutions before pooling broke the 90% accuracy barrier on this deliberately challenging task.',
        tags: ['Deep Learning', 'CNN', 'Image Classification', 'PyTorch'],
        date: 'July 2025',
        dateLabel: 'Completed',
        image: 'images/cnn-quickdraw-architecture.png',
        imageAlt: 'CNN architecture for Quick Draw doodle classification',
        url: 'topics/cnn-quickdraw-classification.html'
    },
    'word2vec-sentiment-analysis': {
        id: 'word2vec-sentiment-analysis',
        title: 'Sentiment Analysis with Word2Vec and Bidirectional LSTM',
        description: 'Trained a Word2Vec embedding on 50,000 IMDB movie reviews and used it as a frozen layer in a bidirectional LSTM for sentiment classification. The self-trained 20-dimensional embeddings captured strong semantic relationships, achieving 87% test accuracy.',
        tags: ['NLP', 'Word2Vec', 'LSTM', 'Embeddings', 'PyTorch'],
        date: 'February 2026',
        dateLabel: 'Completed',
        image: 'images/word2vec-sentiment-training.png',
        imageAlt: 'Word2Vec sentiment analysis training curves',
        url: 'topics/word2vec-sentiment-analysis.html'
    },
    'rgb-to-spectral-reconstruction': {
        id: 'rgb-to-spectral-reconstruction',
        title: 'RGB-to-Spectral Reconstruction for Medical Endoscopy',
        description: 'Evaluating filter-based and machine learning approaches to reconstruct spectral signatures from RGB images for capsule endoscopy. While ML achieves R² = 0.994 in-domain, stress testing reveals critical generalization limitations for clinical deployment.',
        tags: ['Medical Imaging', 'Deep Learning', 'Spectral Imaging', 'Computer Vision'],
        date: 'December 2025',
        dateLabel: 'Completed',
        image: 'images/spectralpaca-performance.png',
        imageAlt: 'RGB-to-Spectral reconstruction performance',
        url: 'topics/rgb-to-spectral-reconstruction.html'
    },
    'ultrasound-object-detection': {
        id: 'ultrasound-object-detection',
        title: 'Ultrasound Object Detection for Image-Guided Therapy',
        description: 'Line and circle detection algorithms with calibrated measurement tools for surgical applications.',
        tags: ['Computer Vision', 'Medical Imaging', 'OpenCV', 'Image-Guided Therapy'],
        date: 'November 2025',
        dateLabel: 'Completed',
        image: 'images/line-detection-results.jpg',
        imageAlt: 'Ultrasound object detection with RANSAC line detection',
        url: 'topics/ultrasound-object-detection.html'
    },
    'wall-segmentation': {
        id: 'wall-segmentation',
        title: 'Wall Segmentation in Floorplans using Mask R-CNN',
        description: 'Mask R-CNN trained on floorplan images to detect and segment walls at pixel level for construction applications.',
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
        description: 'Traditional computer vision techniques for wall segmentation in floorplans, a lightweight alternative to deep learning that requires no training data.',
        tags: ['Computer Vision', 'OpenCV', 'Geometric Processing', 'Segmentation'],
        date: 'July 2024',
        dateLabel: 'Completed',
        image: 'images/colored-room-separation.jpg',
        imageAlt: 'Room segmentation',
        url: 'topics/wall-segmentation-geometric.html'
    },
    'rnn-limerick-generation': {
        id: 'rnn-limerick-generation',
        title: 'Character-Level Limerick Generation with LSTM',
        description: 'Trained a character-level LSTM network on ~15 million characters of limerick text to generate poetry. Compared models at 2 and 20 epochs to study how recurrent networks progressively learn spelling, word boundaries, and poetic structure from raw characters.',
        tags: ['Deep Learning', 'RNN', 'LSTM', 'NLP', 'PyTorch'],
        date: 'February 2026',
        dateLabel: 'Completed',
        image: 'images/lstm-architecture.png',
        imageAlt: 'LSTM cell architecture with gates',
        url: 'topics/rnn-limerick-generation.html'
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
