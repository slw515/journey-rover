package com.example.demo.service;

import com.example.demo.model.Activity;

import java.util.List;

public interface ActivityServiceInterface {

    List<Activity> getAllActivities();

    Activity getActivityById(Long id);

    Activity createActivity(Activity activity);

    Activity updateActivity(Long id, Activity activity);

    void deleteActivity(Long id);
}