### Older Dell iDRAC versions Virtual Console launching Problem fixed
# JNLP Filename Modifier Chrome Extension

This Chrome extension automatically fixes the **weirdness** in older Dell iDRAC versions (like iDRAC 6), so you can open the Java links they provide in Chrome without issues.

## Installation

1. Clone or download this repository to your local machine.

   ```bash
   git clone https://github.com/jarkaz/Fix-IDRAC-.jnlp-file.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable Developer Mode by toggling the switch in the top-right corner.

4. Click on the **Load unpacked** button.

5. Select the folder where this repository was cloned (or unzipped).

6. The extension will now be loaded and activated in your Chrome browser.

   Now you should be able to launch the Virtual Console in the iDRAC 6.

## How It Works

This extension listens for download events in Chrome. Whenever a file is downloaded, it checks if the filename matches the regular expression `^viewer\.jnlp`. If it matches, the filename is processed, and `.jnlp` is re-appended if necessary.

## Why is this useful for older Dell iDRAC versions?

Many older versions of Dell iDRAC (e.g., iDRAC 6) use `.jnlp` files to launch Java-based remote consoles. However, there are sometimes issues with how these `.jnlp` files are named or handled by modern browsers like Chrome, leading to difficulty in launching the Java applet.

This extension resolves these filename issues, allowing you to open the Java links from older iDRAC versions seamlessly in Chrome.

> **Note:** When launching Older Dell iDRAC versions Virtual Console If you encounter a problem with certificates and security, you may need to modify Java settings, disable certificate checks, etc.
