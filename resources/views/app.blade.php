<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/assets/images/favicon.svg" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/lineicons.css" />
        <link rel="stylesheet" href="/assets/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="/assets/css/fullcalendar.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        <x-inertia::head />
    </head>
    <body>
        <x-inertia::app />
    </body>
</html>
