import Keycloak from 'keycloak-js'

const keycloakConfig = {
    realm: 'local',
    url: 'http://localhost:8444',
    clientId: 'sezam-web'
};

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak(keycloakConfig)

export default keycloak