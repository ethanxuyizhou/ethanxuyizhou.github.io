#!/bin/sh

ng build --prod --base-href="ethanxuyizhou.github.io"
ng deploy --base-href=https://ethanxuyizhou.github.io/ethanxuyizhou.github.io/ --name=ethanxuyizhou --email="yizhoux@andrew.cmu.edu"
