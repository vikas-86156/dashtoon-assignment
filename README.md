# Developer's Guide

- It's a static Web-App.
- Works with assignment's _Api key_. **If it has to be changed for assessment**, introduce an env var OR modify the token in _add-gallery_ component.
- run `npm start` to start the server locally.
- _gallery_, _my-comic_, & _add-image_ are the 3 components that make up this app.
- _gallery_ always stays mounted. _my-comic_ & _add-image_ can get unmounted, their state is retained in the parent if they unmount.

