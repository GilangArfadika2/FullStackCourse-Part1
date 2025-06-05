

```mermaid
sequenceDiagram
    participant browser
    participant server



    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate browser
    activate server
    Note right of browser: The browser start sending the content using POST method to the server
    server-->>browser: return json response {"message":"note created"}
    deactivate server
    
    Note right of browser: The browser does not reload the page like in traditional websites and automatically update the presented data

   
    deactivate browser