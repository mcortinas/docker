# Adding Centos7 javasdk
FROM centos
MAINTAINER Marc Cortinas <marc.cortinas@gmail.com>

RUN yum install -y wget
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u45-b18/jdk-7u45-linux-x64.rpm -c -O jdk-7u45-linux-x64.rpm
RUN rpm -Uvh jdk-7u45-linux-x64.rpm
RUN rm -f /root/jdk-7u45-linux-x64.rpm

LABEL vendor=Marc\ Cortinas\
      cat.cortinasval.docker.operatingsystem="CentOS" \
      cat.cortinasval.docker.operatingsystemmajrelease="7" \
      cat.cortinasval.docker.app="oracle-jdk" \
      cat.cortinasval.docker.apprelease="7u45" \
      cat.cortinasval.docker.version="0.0.1-test" \
      cat.cortinasval.docker.release-date="2015-06-14"\
      description="CentOS 7 official image \
      adding oracle jdk 8u45-b14"

