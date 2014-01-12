AngularJS + MediaWiki Parsoid
============================

You need to install WikiMedia Parsoid in order to use this code.

## Parsoid page

http://www.mediawiki.org/wiki/Parsoid

Plese follow Parsoid setup guide.

Create api/localsettings.js from api/localsettings.js.example in parsoid project.
Enable CORS for your Parsoid service in localsettings.js

    // allow cross-domain requests to the API (default disallowed)
    parsoidConfig.allowCORS = '*';
    
## Usage

Ensure that your service is started and you have correct address in main.js 

    return $http.post('http://localhost:8000/enwiki/', ... );
    
    
============================
Best wishes, Petro Kashpurenko
