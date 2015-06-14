# Adding jdk8u45 to Centos7 
FROM centos
MAINTAINER Marc Cortinas <marc.cortinas@gmail.com>

RUN yum install -y wget
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u45-b14/jdk-8u45-linux-x64.rpm -O /root/jdk-8u45-linux-x64.rpm
RUN rpm -Uvh /root/jdk-8u45-linux-x64.rpm
RUN rm -f /root/jdk-8u45-linux-x64.rpm

COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

LABEL vendor=Marc\ Cortinas\
      cat.cortinasval.docker.operatingsystem="CentOS" \
      cat.cortinasval.docker.operatingsystemmajrelease="7" \
      cat.cortinasval.docker.app="oracle-jdk" \
      cat.cortinasval.docker.apprelease="8u45" \
      cat.cortinasval.docker.version="0.0.1-test" \
      cat.cortinasval.docker.release-date="2015-06-14"\
      description="CentOS 7 official image \
      adding oracle jdk 8u45-b14"
