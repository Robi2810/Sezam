\c

create user "sezam-data-provider" with password 'sezam-data-provider';

create database "sezam-data-provider" with owner = 'postgres';

\c "sezam-data-provider"

alter role "sezam-data-provider" set search_path = sezam_data_provider, public;
create schema sezam_data_provider authorization "sezam-data-provider";
