
async function loadContent(targetId, content) {
    try {
            const response = await fetch(`${content}.html`);

            if (!response.ok) {
                throw new Error(`Failed to fetch ${content}.html: ${response.statusText}`);
            }

            const htmlContent = await response.text();
            document.querySelector(`.${targetId}`).innerHTML = htmlContent;
    } 
    catch (error) {
                console.error(error);
    }
}
    
document.addEventListener('DOMContentLoaded', function() { 
    loadContent('content', 'profile'); });
    
document.getElementById('profile-link').addEventListener('click', function() {
    loadContent('content', 'profile') });
    
document.getElementById('schoolprojects-link').addEventListener('click', function() { 
    loadContent('content', 'schoolprojects'); });


var event = new Event("DOMContentLoaded");
document.dispatchEvent(event);