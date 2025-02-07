#!/bin/sh

. $HOME/.bashrc



# Commands
CP="/bin/cp"
ECHO="/bin/echo"
PRT="/usr/bin/printf"
RM="/bin/rm"

# Vars
S3_BUCKET="s3://pulpfree.io-dev/"
DOMAIN="https://dev.pulpfree.io"
PROFILE="pfdev"
ENV="dev"
SEP="=========================================================================="

$PRT "\n%s\n" $SEP
$PRT "  %s\n" "-- Deploying $DOMAIN --"
$PRT " %s\n" "Location: $S3_BUCKET"
$PRT "%s\n" $SEP

$PRT "stand by building...\n"
mycd ./deploy
$ECHO `yarn build`

$PRT "\nbuild complete\n"

$PRT "Uploading files to S3\n"
$ECHO `aws s3 --profile $PROFILE sync ../build/client/ $S3_BUCKET --delete`

$PRT "\nDeployment complete!\n"
$PRT "%s\n\n" "URL: $DOMAIN"