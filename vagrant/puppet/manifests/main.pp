class apt_update {
    exec { "aptGetUpdate":
        command => "sudo apt-get update",
        path => ["/bin", "/usr/bin"]
    }
}

class othertools {
    package { "git":
        ensure => latest,
        require => Exec["aptGetUpdate"]
    }

    package { "make":
      ensure => latest,
      require => Exec["aptGetUpdate"]
    }

    package { "vim-common":
        ensure => latest,
        require => Exec["aptGetUpdate"]
    }

    package { "curl":
        ensure => present,
        require => Exec["aptGetUpdate"]
    }

    package { "htop":
        ensure => present,
        require => Exec["aptGetUpdate"]
    }

    package { "g++":
        ensure => present,
        require => Exec["aptGetUpdate"]
    }

    package { "libpq-dev":
        ensure => present,
        require => Exec["aptGetUpdate"]
    }

}

class node-js {
  include apt
  apt::ppa {
    'ppa:chris-lea/node.js': notify => Package["nodejs"]
  }

  package { "nodejs" :
      ensure => latest,
      require => [Exec["aptGetUpdate"],Class["apt"]]
  }

  package { "coffeescript" :
    ensure => latest,
    require => [Exec["aptGetUpdate"],Class["apt"]]
  }

  exec { "npm-update" :
      cwd => "/vagrant",
      command => "npm -g update",
      onlyif => ["test -d /vag rant/node_modules"],
      path => ["/bin", "/usr/bin"],
      require => Package['nodejs']
  }

  exec { "npm-install-global-dependency" :
    command => "sudo npm install -g node-inspector typescript gulp pg sequelize-cli hashids",
    path => ["/bin", "/usr/bin"],
    require => Package['nodejs']
  }

  package { 'coffee':
    ensure   => present,
    provider => 'npm',
    require => Package['nodejs']
  }

}


class { 'postgresql::server':
  version => '9.1',
  port => 5432,
}

postgresql::db { 'random':
  owner => 'vagrant',
  password => 'random',
}



# class { 'redis': }

include apt_update
include othertools
include node-js
# include mongodb
