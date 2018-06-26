#!/usr/bin/env bash

TMP_DIR="/tmp/planningto/groot"
TARGET_DIR="./core/protos/github.com/planningto/groot/service"

BASE_NAME="base"
BASE_DIR="$TARGET_DIR/$BASE_NAME"

PLUGIN_NAME="plugin"
PLUGIN_DIR="$TARGET_DIR/$PLUGIN_NAME"

PLUGINDATA_NAME="plugindata"
PLUGINDATA_DIR="$TARGET_DIR/$PLUGINDATA_NAME"


git clone git@github.com:planningto/groot.git $TMP_DIR
mkdir -p $BASE_DIR
cp "$TMP_DIR/service/$BASE_NAME/$BASE_NAME.proto" $BASE_DIR

mkdir -p $PLUGIN_DIR
cp "$TMP_DIR/service/$PLUGIN_NAME/$PLUGIN_NAME.proto" $PLUGIN_DIR

mkdir -p $PLUGINDATA_DIR
cp "$TMP_DIR/service/$PLUGINDATA_NAME/$PLUGINDATA_NAME.proto" $PLUGINDATA_DIR
rm -rf /tmp/planningto/groot