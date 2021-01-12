package com.telkom.pijarmahir;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.rnfs.RNFSPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import java.lang.reflect.InvocationTargetException;
import com.rnziparchive.RNZipArchivePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;


import java.util.List;
import java.util.Arrays;

import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;


public class MainApplication extends NavigationApplication {

  @Override
  protected ReactGateway createReactGateway() {
    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
    return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(new VectorIconsPackage(), new AsyncStoragePackage(), new SvgPackage(),
        new RNFSPackage(), new RNZipArchivePackage(), new RNCWebViewPackage(), new NetInfoPackage(), new RNDeviceInfo());
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}