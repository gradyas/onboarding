# Deployment Process for Electrical Grid Infographic

## Preparation

### Review Project Files

The following files will be deployed:

*   `index.html`: The main infographic page.
*   `src/`: This directory contains the image files (`electrical_grid_infographic.png`, `electricity_transmission_generation.jpg`) that are used in the infographic.
These are the files we'll need to deploy.

### Choose a Storage Option

We will be using Cloudflare R2 for storing the static assets due to its seamless integration with Cloudflare Workers and no egress fees.

### Set up Cloudflare Account and R2 Bucket

The user has completed the steps to set up a Cloudflare account and create an R2 bucket. The user is now ready to upload files to the R2 bucket.

## Deployment

### Upload Static Assets