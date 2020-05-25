# Glossary of Terms

## Data

### Stages of Data
Under the hood, Data on the Prifina platform is accessible in a number of formats.
While data is stored in the raw formats by which a user provides it, we provide API layers
which simplify data access for developers and improve control for the users.

![Stages of data](./datastages.jpg)

#### Raw Data
All data, as it was imported or provided by the user, in the structure it was provided in. This is the only state in which data is statically stored, and it is kept in JSON format. Raw data is parsed by the standardization layer to provide aggregate data.

#### Aggregate Data
Raw data standardized for ease of use. It is available exclusively to Local Data and Widget Apps, and can be accessed via GraphQL queries.

#### Profile Card Data
Subsets of aggregate data which can be anonymized or abstracted. Available to all applications and services which receive permission from the user. These are outlined by their corresponding Profile Cards, and allow the user to control the availability of their data and easily provide access to third-parties.
