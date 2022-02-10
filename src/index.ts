import SharedButton from './SharedButton';

const sharedButton = new SharedButton("https://www.youtube.com/channel/UClvtUd7IO1L9BrCEuGkGRXw");

sharedButton.bind(".btn-twitter", "twitter");
sharedButton.bind(".btn-facebook", "facebook");
sharedButton.bind(".btn-linkedin", "linkedin");