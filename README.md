# Fullstack AI on AWS

![ai on aws](./fullstack-ai-aws.png)

If you've ever wanted to complete guide to building your next application on AWS, this is the repo for you.

> 🗒️ This repo is part of a YouTube video that describes how each of the various pieces are built and deployed.

## Overview

This repo brings together [core AWS services that every app needs](https://youtube.com/shorts/DfwhE6yXcCM?si=ds2hBN2Ia2pIfdC3):

- AWS Cognito: Allows user signups, forgot password, and more
- AWS AppSync: A managed GraphQL service that provides websockets out of the box
- Amazon DynamoDB: Database layer
- Amazon Bedrock: AI LLM service

All of these services are located in their own folder in the `backend` directory. They then come together in the `lib/backendStack.ts` file.

In addition, this comes with a frontend that uses NextJS, Tailwind CSS, DaisyUI, and Amplify Libraries.

This is completely built with TypeScript on both the NextJS side and the AWS CDK side.

Checkout my YouTube channel for more content like this!
