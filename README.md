# LeRN


## Check Out Other Repos

To enhance your understanding and make the most out of this project, be sure to check out the following repositories:

### [LeRN-Emotions](https://github.com/BHARATJHAWAR52/LeRN-Emotions)
This project is a web application that evaluates entrepreneurship skills based on user-submitted text. Built with Flask for the backend and MongoDB for data storage, it processes a paragraph containing exactly 10 sentences to identify specific business-related keywords. The application uses Pandas to analyze the text and generate a skills evaluation, categorizing users as having 'High Entrepreneurship Skills', 'Average', or 'Needs Improvement'. Users can submit their paragraphs through a web form, and the results are stored in MongoDB. The project is designed to be deployed on Vercel, with configurations to separate backend and frontend components


### [LeRN-Evaluation](https://github.com/ISHAAN-KKR/LeRN-Evaluation)
This project is a web application that evaluates entrepreneurship skills based on user-submitted text. Built with Flask for the backend and MongoDB for data storage, it processes a paragraph containing exactly 10 sentences to identify specific business-related keywords. The application uses Pandas to analyze the text and generate a skills evaluation, categorizing users as having 'High Entrepreneurship Skills', 'Average', or 'Needs Improvement'. Users can submit their paragraphs through a web form, and the results are stored in MongoDB. The project is designed to be deployed on Vercel, with configurations to separate backend and frontend components.
### Aspects of Entrepreneurship Recognition

This project is a web application designed to identify and analyze various aspects of entrepreneurship from audio recordings of speeches or interviews. Built using Flask, the app leverages a pre-trained Convolutional Neural Network (CNN) model to recognize key themes related to entrepreneurship, such as innovation, leadership, risk-taking, vision, strategy, and networking.

*Key Components:*
- *Flask Web Framework*: Manages web routing and user interactions.
- *Librosa*: Utilized for audio processing and feature extraction.
- *TensorFlow/Keras*: For loading and utilizing the pre-trained CNN model.
- *HTML and JavaScript*: Front-end for file uploads and displaying analysis results.

*Workflow:*
1. Users upload an audio file via the web interface.
2. The app processes the audio to extract relevant features like MFCCs, chroma, and spectral contrast.
3. Extracted features are normalized and reshaped to match the model's input requirements.
4. The model predicts the dominant aspects of entrepreneurship discussed in the audio, and the results are displayed on the webpage.

This application showcases the integration of machine learning models with web technologies, providing an interactive tool to analyze and understand key entrepreneurial themes in spoken content.
