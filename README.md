# React Router v6 useParams Issue in Nested Routes

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6 within nested routes. The problem arises when parent routes don't correctly pass down the necessary parameters to their children, resulting in the `useParams` hook returning an empty object in the nested component.

## Problem Description
The `useParams` hook in a nested component might return an empty object even if the URL contains the expected parameters. This often happens when parent routes successfully match a parameter but don't propagate it to their child components. The provided example shows how this error may manifest and how to fix it using an appropriate method of passing parameters to nested child routes.

## Solution
The solution involves correctly forwarding parameters to nested routes using the `Outlet` component or by explicitly defining the route structure to ensure parameter propagation. This repository presents both approaches, providing clear demonstrations of how to resolve the issue effectively.

## How to Reproduce
1. Clone the repository
2. Run `npm install`
3. Run `npm start`
Observe the behavior of the example application and how it demonstrates the problem and its solution.