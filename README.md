# spfx-recoil

## Summary

Demo for using Recoil JS in SPFx React projects


## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.15-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Recoil JS (npm install recoil)

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| spfx-recoil | Vijay Natrajan |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.0.0   | Aug 6, 2021      | Initial Release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

This is a small spfx-webpart used to test out Recoil JS atoms and selectors.

This WebPart illustrates the following concepts:

- Using recoiljs atom 
- Using recoiljs selector

> Atoms storing global state are found in GlobalState.ts under src/components. It also has a selector called
> farenTemp that automatically converts temp atom value in Celcius to equivalent Farentheit value

> React component called Celcius allows user to type a number in Celcius. It then stores this value in a 
> global atom called temp

> React component called Farenheit which uses the tempFaren selector and display the resulting value

> Both Ceclius and Farenheit compnents are used in RecoilDemo.tsx

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Getting started with Recoil JS (Official Documentation)](https://recoiljs.org/docs/introduction/getting-started)
