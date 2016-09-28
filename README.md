switch-fail-job
=============

Fails a job for a reason specified, sending it to problem jobs. Optionally write the fail reason or another value to private data at the same time.

<img src="https://i.imgur.com/KCZjflA.png" width="500">


## Flow element properties

- __Fail message__ - The failure message, accessible via Job.FailMessage.
- __Key__ - Optional private data key.
- __↳ Value (override)__ - Optional private data value. If left blank, the fail message is used.
