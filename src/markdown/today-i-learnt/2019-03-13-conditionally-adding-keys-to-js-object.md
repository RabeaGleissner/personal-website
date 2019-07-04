---
date: "2019-03-13"
title: "You can conditionally add a key to an object in JS"
path: "/til/conditinally-adding-keys-to-objects-in-js"
tags: ["til"] 
---

I had this code for adding a proposed candidate to our store of supply requests.
And I needed to add a new key to the second argument - but only if it existed.
The new key was `infoForSchool`.

```
await supplyRequestStore.addProposedCandidate(supplyRequestId, {
		candidateId,
		chargeRateEstimate,
		});

```


Instead of creating the default object and maybe merging in the `infoForSchool` if it existed and then adding the object to the function, modern JavaScript allows you to do it all in line.
Mind === blown.

```
await supplyRequestStore.addProposedCandidate(supplyRequestId, {
		candidateId,
		chargeRateEstimate,
    ...infoForSchool && { infoForSchool },
		});
```

And you can do the same for arrays, also using the spread operator.

```
  <Tabs
    content={[
      ...(candidate.infoForSchool ? [{
        label: 'Info for school',
        body: <p>{candidate.infoForSchool}</p>,
      }] : []),
      {
        label: 'Safeguarding information',
        body: <SafeguardingInformation candidate={candidate} supplyRequirementId={supplyRequirementId} />,
      },
      {
        label: 'Documents',
        body: <CandidateDocuments candidate={candidate} supplyRequirementId={supplyRequirementId} />,
      },
    ]}
  />

```

In this example our tabs have an array of content.
The info for school should only be displayed if it exists. So we can either merge in an array containing that object or we can just merge an empty array instead.
