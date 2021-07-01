// implement authetication.  Can override the perform create like last week.
// a user can only create one profile- implement logic to say that you can only create a profile once, but you can edit it as much as you want (put request to edit).   If they don't have a profile- do a POST request to CREATE profile.
// override to say the person making the request is the one we need to create a profile for- override the perform create

// -Come to page, should be able to read articles w/o logging in
// -should be able to create and edit YOUR articles
// -Article will have title, body, author, and CATEGORY
// -how you set up category is up to you- CharField, foreign key (if category model)
// -when you come to site and click on heading it should only get the articles that are in that particular heading (work w/ filtering data in the backend.) Do not fetch all of the articles and filter on the front end, filter them on the backend in django (not react)
// -if you want, you can add images to some of the articles

//Thurs:
// Published admin control:
// Logged in users can write articles, and see/edit/delete them on their own page,
// however they can only be seen in the main articles feed when the admin approves & "publishes" them.
// -Admin can reject them if they want.
// -Once an article is published, it can no longer be edited or deleted by the author.
